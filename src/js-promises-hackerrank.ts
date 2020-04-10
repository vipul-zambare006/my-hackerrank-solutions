const url = `https://jsonmock.hackerrank.com/api/medical_records`;
const https = require('https');

async function getRecordByPageNumber(pageNumber: number): Promise<any[]> {
    return new Promise((resolve, reject) => {
        https.get(`${url}?&page=${pageNumber}`, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            })
            resp.on('end', async () => {
                resolve(JSON.parse(data).data);
            });
        }).on('error', err => reject(err))
    });
}

async function getTotalPages(): Promise<number> {
    return new Promise((resolve, reject) => {
        https.get(`${url}`, (res) => {
            let data = "";
            res.on('data', chunk => {
                data += chunk;
            });
            res.on('end', async () => {
                resolve(JSON.parse(data).total_pages);
            });
        }).on('error', err => reject(err));
    })
}

function getNumberOfPatients(ageStart: number, ageEnd: number, bpDiff: number) {
    const recordPages: any[] = []
    getTotalPages()
        .then(totalPages => {
            let result = [];
            for (let i = 0; i < totalPages; i++) {
                recordPages.push(getRecordByPageNumber(i).then((data: any[]) => data));
            }

            Promise
                .all((recordPages))
                .then((recordPages: any[][]) => {
                    for (let recordPage of recordPages) {
                        for (let record of recordPage) {
                            if (record && record.vitals) {
                                const vitals = record.vitals;
                                const age = getAge(record.timestamp, record.userDob);
                                if (ageStart <= age && age <= ageEnd) {
                                    if ((vitals.bloodPressureDiastole - vitals.bloodPressureSystole) > bpDiff) {
                                        result.push(record);
                                    }
                                }
                            }
                        }
                    }
                    return result;
                })
                .then((result) => {
                    if (result && result.length) {
                        console.log("total records:", result.length);
                    }
                    else {
                        console.log(undefined);
                    }

                })
                .catch((error: Error) => {
                    console.log(error.message);
                })
        });
}

function getAge(timestamp: number, birthdate: string): number {
    return Math.abs(new Date(timestamp).getFullYear() - parseInt(birthdate.substr(-4)));
}


//function execution
getNumberOfPatients(28, 30, 61);
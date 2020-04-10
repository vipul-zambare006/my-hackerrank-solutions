var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = `https://jsonmock.hackerrank.com/api/medical_records`;
const https = require('https');
function getRecordByPageNumber(pageNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            https.get(`${url}?&page=${pageNumber}`, (resp) => {
                let data = '';
                resp.on('data', (chunk) => {
                    data += chunk;
                });
                resp.on('end', () => __awaiter(this, void 0, void 0, function* () {
                    resolve(JSON.parse(data).data);
                }));
            }).on('error', err => reject(err));
        });
    });
}
function getTotalPages() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            https.get(`${url}`, (res) => {
                let data = "";
                res.on('data', chunk => {
                    data += chunk;
                });
                res.on('end', () => __awaiter(this, void 0, void 0, function* () {
                    resolve(JSON.parse(data).total_pages);
                }));
            }).on('error', err => reject(err));
        });
    });
}
function getNumberOfPatients(ageStart, ageEnd, bpDiff) {
    const recordPages = [];
    getTotalPages()
        .then(totalPages => {
        let result = [];
        for (let i = 0; i < totalPages; i++) {
            recordPages.push(getRecordByPageNumber(i).then((data) => data));
        }
        Promise
            .all((recordPages))
            .then((recordPages) => {
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
            .catch((error) => {
            console.log(error.message);
        });
    });
}
function getAge(timestamp, birthdate) {
    return Math.abs(new Date(timestamp).getFullYear() - parseInt(birthdate.substr(-4)));
}
getNumberOfPatients(28, 30, 61);
//# sourceMappingURL=main.js.map
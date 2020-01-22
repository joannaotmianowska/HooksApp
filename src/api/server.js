import request from './request'

const getCandidates = (perPage, page) => request(
    `https://randomuser.me/api/?format=json&results=${perPage}&page=${page}`
);

export { getCandidates }

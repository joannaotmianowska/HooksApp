const rest = require('rest')
// import rest from 'rest';
// import mime from 'rest/interceptor/mime'
const mime = require('rest/interceptor/mime')

export default rest.wrap(mime)

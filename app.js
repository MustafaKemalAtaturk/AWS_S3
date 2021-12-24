
const AWS = require('aws-sdk');
const prompt = require('prompt');

prompt.start();
console.log('Please enter type your AccessKey ID and Secret Key:');
prompt.get(['accessKeyIdtype', 'secretAccessKeytype'], function (err, result) {
  if (err) {
    return onErr(err);
  }
  
    const s3 = new AWS.S3({
    accessKeyId: result.accessKeyIdtype,
    secretAccessKey: result.secretAccessKeytype
    });
        const listBuckets = (s3) => {
          s3.listBuckets(function(err, data) { 
            if (err) { 
             console.log("Error", err);
             
           } else {
            console.log("Success", data.Buckets);
          }
    });
}
function sleep(ms) {
    console.log('Please Wait...')
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function main(){
    console.log('\nListing out all the buckets in your AWS S3: ')
    listBuckets(s3)
    await sleep(5000)
}
main()
});

function onErr(err) {
  console.log(err);
  return 1;
}


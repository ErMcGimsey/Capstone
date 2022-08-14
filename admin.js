const admin = require('firebase-admin');


// firebase service account pk
const type = "service_account";
const project_id = "capstone-37e12";
const private_key_id = "938035185ec319bee069f10622be4779fb41fd40";
const private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCnGVjVhjUNcS/R\n4ABSs4wmXI2e2NFdPjU/Xp7S2Nid8DG2/djd+54avZocfMmfjbT9tf5pBKYjyT4g\n0/iTiUB88/ZAtb5s4GDyv7TbEdaTtYVxhfTzaqpV9NyYCGVkbWS1/7cFsLPiiSZk\n5XlcAPxGJIFg0J2erIVnxFUh3JthQAC8S50Nyu2RFRV5usaGR7MHpQ6X/oFhoHvW\nEoH7LeegEQN9a7k0N155SB9CB6JGcj4anWZMBJ2Ig3aTmAjcTGlg9/wj8ErAWE4I\nNgHu+3wQ6CT/vxuk6960UNbQLbCo71DBj2mAUqw0Rss9QyWwYivACBPF3+XGTxpp\nHeePODzXAgMBAAECggEAKWtyBrOWsPdOiDKDQfy5j8S/YhGSjA9geY3FxrPzteqV\nGCwCNrwpK6215rvT6pXguEcFghih6hr3KIICiuepsY9zigTC6BASV/nHJcpdKw4C\nvuoalr/o6xegGptyLpujLC3vuxxa6ptehgIPvAuOfQCNhWcQuwU+qEMVayhY55jj\n+16zyf0pGWd4xSh4spYr6tTyRFu8MIdUDAip/AUO1BjvxsYgY3Y3mhrI7dzOOGN+\nlOMAJoCJov0ogMJwOo4uY/ypGIF411j2oqakTthXwIRVPSl8cuMFaxp8SuS4y+QO\nbn42pTkbG4YQZUKGexz7xapOXJxEKAVF8rP5RKmwkQKBgQDfvr/THkH/cDUckh8a\njGKvyUi63r3QgAYXCAdHYAQ05DKGUdwMHx6qIxnBMfILZl912x2RxHJToFTzNcui\nZsdCeuJUxd1x4zwuw8ZtOKAXD9Rs1TqbJtBCcG4vbiOhhTeOC0tfotc13kilqjzj\nCCARU8VIXZxoPb2OS55ldfKTGQKBgQC/MBbTRQrX7mgTz4ZmWnM+Ij/RaQJnaPpW\n4lyDEc820h/DcVeer3mSd1TRcBMhM7marwOyyEQLaloL8sQso/hlaS4sShkxQc+d\nK2wlarBzWMngxLiDAhRbSkTnLxdZPjXjWvcqWkuI69borXgCvuVpkY994DV8DDG0\nFGQKjxm9bwKBgQCnmtdNSbw8ogxXI6qDE6iVb924hkSAXHazaAMz11wvVsX2UnnY\n5rLs1jBjxYtAOObHfWUwHY1a0Z7xNVoehIk9ZpoG0NWqi4M4sNUCWkmqHOSOxkgJ\nk1CshFY113Z/dzB/ijxjHrPCGYon91d25k5HTI5bQCx69cz6O/EipfEZeQKBgQCX\nLv/dsQsSFYRXphMxfPUEfTDZ95/fBjRv4DAntT2WrDJR6p7O7RPFrndz5pw59R0g\nJKVYCuVD4aWzLRXT9xXFm5bXjwC84r26G0w5ilRd4ihBhU4iytIuHly+M47TE06p\nqpUo+J4id9xJwmLUSQBAqso9T777iOkE7druPpqsIQKBgCzzMyZH3DxDimN9Cz45\nyds9iF+ttu7BHNP26Vqa+B5H1EsFirbLxCkL1jzORwC4poeb/zUflWGsFAA7scLn\nTuHc8cZVzlOcAO6lkZqBiOlST4vtGzGxG6FbLxlLpevmzYTsJB2RDG9fKY9DuFVn\n8nkZcXsJTBBt4WF6mYCqBz3v\n-----END PRIVATE KEY-----\n";
const client_email = "firebase-adminsdk-3iefq@capstone-37e12.iam.gserviceaccount.com";
const client_id = "103515115091056223180";
const auth_uri = "https://accounts.google.com/o/oauth2/auth";
const token_uri = "https://oauth2.googleapis.com/token";
const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs";
const client_x509_cert_url = "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-3iefq%40capstone-37e12.iam.gserviceaccount.com";



// credential grants access to Firebase services
admin.initializeApp({
  credential: admin.credential.cert({
      type,
      project_id,
      private_key_id,
      private_key:
        private_key.replace(/\\n/g,'\n'),
      client_email,
      client_id,
      auth_uri,
      token_uri,
      auth_provider_x509_cert_url,
      client_x509_cert_url
  }),
});

module.exports = admin;
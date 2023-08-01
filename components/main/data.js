const scan=require('../../assets/icons/ic_scan.png')
const check=require('../../assets/icons/ic_check.png')
const result=require('../../assets/icons/ic_result.png')
const biometric=require('../../assets/icons/icn_biometric.png')
const finger=require('../../assets/icons/ic_finger.png')
const gallery=require('../../assets/icons/gallery.png')
export const data=[
    {
        id:1,
        nav:'Country',
        title:'ACCURA OCR',
        description:'Recognizes Passport & ID MRZ.Pn & Aadhaar Cards India.Works Offline',
        icons:[
            {
                name:scan,
                title:'Scan',
                special:'>',
            },
            {
                name:check,
                title:'Check',
                special:'>',
            },
            {
                name:result,
                title:'Result',
            },
        ],
    },
    {
        id:2,
        title:'ACCURA FACE MATCH',
        description:'AI & ML Based Powerful Face Detection & Recognition Solution 1:1 and 1:N. Works Offline',
        icons:[
            {
                name:scan,
                title:'Capture',
                special:'>',
            },
            {
                name:biometric,
                title:'Biometric',
                special:'>',
            },
            {
                name:result,
                title:'Result',
            },
        ],
    },
    {
        id:3,
        title:'FINGER PRINT MATCH',
        description:'Robust finger detection and recognition solution.Works offline',
        icons:[
            {
                name:scan,
                title:'Capture',
                special:'>',
            },
            {
                name:finger,
                title:'Biometric',
                special:'>',
            },
            {
                name:result,
                title:'Result',
            },
        ],
    },
    {
        id:4,
        title:'ACCURA AUTHENTICATION',
        description:'eKYC and Customer On-Boarding with Liveness Detection & Face Biometrics for Remote,Realtime User Authentication.',
        description2:'Realtime User Authentication.',
        icons:[
            {
                name:scan,
                title:'Capture',
                special:'>',
            },
            {
                name:gallery,
                title:'Liveness',
                special:'>',
            },
            {
                name:biometric,
                title:'Biometric',
                special:'>',
            },
            {
                name:result,
                title:'Result',
            },
        ],
    },

]
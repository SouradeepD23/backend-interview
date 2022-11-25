const sampleData = {
    services : [
    {
        "id": 123,
        "name": "Inspection"
    },
    {
        "id": 789,
        "name": "Testing"
    },
    {
        "id": 456,
        "name": "Analysis"
    }
    ],

    orders : [
    {
        "id": "223",
        "datetime": "2022-11-01T11:11:11.111Z",
        "totalfee": 100,
        "services": [
            {
            "id": "123",
            }
        ]
    },
    {
        "id": "224",
        "datetime": "2022-11-01T11:11:11.111Z",
        "totalfee": 100,
        "services": [
            {
            "id": "789",
            }
        ]
    },
    {
        "id": "225",
        "datetime": "2022-11-01T11:11:11.111Z",
        "totalfee": 100,
        "services": [
            {
            "id": "456",
            }
        ]
    }
    ]
};

export default sampleData;

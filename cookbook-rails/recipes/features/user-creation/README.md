# Registration Example

Endpoint: /auth

HTTP verb: POST

Payload:
```json
{
	"email": "user@wolox.com",
	"name": "User",
	"birth_date": "1980-04-05",
	"password": "secret",
	"address": "Street 123",
	"city": "Example City",
	"state": "Example State",
	"country": "Example Country",
	"email_subscription": true,
	"number_of_languages": 5
}
```

Response:

```json
{
    "status": "success",
    "data": {
        "uid": "user@wolox.com",
        "id": 3,
        "email": "user@wolox.com",
        "provider": "email",
        "allow_password_change": false,
        "name": "User",
        "nickname": null,
        "birth_date": "1980-04-05T00:00:00.000Z",
        "address": "Street 123",
        "city": "Example City",
        "state": "Example State",
        "country": "Example Country",
        "email_subscription": true,
        "number_of_languages": 5,
        "created_at": "2020-05-11T15:43:10.610Z",
        "updated_at": "2020-05-11T15:43:10.795Z"
    }
}
```

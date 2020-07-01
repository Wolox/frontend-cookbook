# Registration Example

Endpoint: /api/users

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
    "id": 1,
    "email": "user@wolox.com",
    "name": "User",
    "birth_date": "1980-04-05",
    "address": "Street 123",
    "city": "Example City",
    "state": "Example State",
    "country": "Example Country",
    "email_subscription": true,
    "number_of_languages": 5
}
```

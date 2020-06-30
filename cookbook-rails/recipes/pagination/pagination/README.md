The pagination is done using the wor-paginated gem. 
Wor paginated will read the page (the page number) and the limit (the size of each page) from the query params 
if none is passed in the render paginated method. 
For more information read https://github.com/Wolox/wor-paginate#usage. 


Endpoint example: localhost:3000/books

response:
{
    "page": [
        {
            "title": "the colour of magic",
            "genre": "fantasy",
            "year": 1900
        },
        {
            "title": "the light fantastic",
            "genre": "fantasy",
            "year": 2000
        }
    ],
    "count": 2,
    "total_pages": 1,
    "total_count": 2,
    "current_page": 1,
    "next_page": null
}


Example: localhost:3000/books?page=2&limit=1

response: 
{
    "page": [
        {
            "title": "the light fantastic",
            "genre": "fantasy",
            "year": 2000
        }
    ],
    "count": 1,
    "total_pages": 2,
    "total_count": 2,
    "current_page": 2,
    "next_page": null
}

import requests

requests.get(
    url="https://api.joby.ai/v0/jobs",
    params={
        "and": ["python", "django"],
        "location": ["remote", "new york"],
        "salaryFrom": 80000,
        "limit": 5,
    },
    headers={
        "x-api-key": "YOUR_API_KEY",
    },
)

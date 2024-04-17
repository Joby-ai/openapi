const axios = require('axios')

await axios.get("https://api.joby.ai/v0/jobs", {
  params: {
    and: ['node', 'react'],
    location: ['san francisco', 'bay area'],
    days: 30,
    limit: 5
  },
  headers: {
    'x-api-key': 'YOUR_API_KEY'
  }
})

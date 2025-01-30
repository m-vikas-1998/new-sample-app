/*
 * This is an example server-side function that provides the real-time presence
 * data of all the active rooms in the given domain.
 */
export default async function handler(req, res) {
  if (req.method === 'GET') {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.DAILY_API_KEY}`,
      },
    };

    const dailyRes = await fetch(
      `${
        process.env.DAILY_REST_DOMAIN || 'https://api.daily.co/v1'
      }/presence`,
      options
    );

    console.log('#testing dailyRes', dailyRes)

    const response = await dailyRes.json();
    console.log('#testing response', response)
    console.log('#testing DAILY_API_KEY', process.env.DAILY_API_KEY)
    return res.status(200).json(response);
  }

  return res.status(500);
}

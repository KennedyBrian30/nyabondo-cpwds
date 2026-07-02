// api/auth.js
export default async function handler(req, res) {
  const { code } = req.query;
  
  // Your credentials from the GitHub OAuth App
  const GITHUB_CLIENT_ID = 'Ov23lilhOh8qeBlBrmEK';
  const GITHUB_CLIENT_SECRET = '8461cdd31bd6d0a1ab3d35913bffbed0a91a54cb';

  // If no code is provided, redirect to GitHub for authorization
  if (!code) {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=repo`;
    return res.redirect(githubAuthUrl);
  }

  // Exchange the code for an access token
  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code,
    }),
  });
  
  const tokenData = await tokenResponse.json();

  if (tokenData.error) {
    console.error('GitHub OAuth error:', tokenData);
    return res.status(400).json({ error: tokenData.error_description || 'OAuth failed' });
  }

  // Redirect back to your CMS admin page with the token
  const adminUrl = `${req.headers.origin}/admin/#/`;
  res.redirect(`${adminUrl}?access_token=${tokenData.access_token}`);
}
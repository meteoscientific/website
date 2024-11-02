
# How to Update Your GitHub Personal Access Token (PAT)

Follow these steps to update your GitHub Personal Access Token when it expires or needs regeneration.  Basically you're going to regenerate your token, make sure the permisisons are correct, then update the token in your .env file.

---

## 1. Regenerate Your Personal Access Token (PAT)
- Go to [GitHub Settings](https://github.com/settings/tokens).
- Create a new **Fine-grained Personal Access Token**:
  - **Select Repositories**: Choose only the `meteoscientific/website` repository.
  - **Set Permissions**:
    - **Contents**: Read and write
    - **Metadata**: Read-only
    - **Pages**: Read and write
  - **Set Organization Permissions**:
    - **Members**: Read-only
    - **Administration**: Read-only
    - **Webhooks**: Read and write
    - **Secrets**: Read and write
    - **Projects**: Read and write
  - **Set the Expiry Date**: Choose the maximum duration (365 days).
- **Save the token** securely (e.g., in a password manager).

---

## 2. Update Your Local Environment
- **Go to VSCode and open the Meteoscientific folder**.
- **Update the .env file**:
  ```bash
  GIT_TOKEN=`your_new_github_pat
  ```

  *(Obvi, replace`your_new_github_pat` with your actual token.)*

---

## 3. Verify the PAT
- Use the following `curl` command to check if your token is working:
  ```bash
  curl -H "Authorization: token $GIT_TOKEN" https://api.github.com/user
  ```
- You should see your GitHub user information.

---

## 4. Deploy Your Changes
1. **Build your site locally**:
   ```bash
   npm run build
   ```
2. **Serve locally to test**:
   ```bash
   npm run serve
   ```
3. **Commit and push changes**:
   ```bash
   git add .
   git commit -m "Updated the PAT"
   git push origin main
   ```
4. **Deploy the site**:
   ```bash
   GIT_USER=your_github_username GIT_TOKEN=$GIT_TOKEN npm run deploy
   ```

---

## Troubleshooting
- **Deployment errors**: Check if your PAT has the right permissions.
- **Website not updating**: Clear browser and Cloudflare cache.

---


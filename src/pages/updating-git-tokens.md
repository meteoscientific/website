# How to Update Your GitHub Personal Access Token (PAT)

Follow these steps to update your GitHub Personal Access Token when it expires or needs regeneration.

---

## 1. Regenerate Your Personal Access Token (PAT)
- Go to [GitHub Settings](https://github.com/settings/tokens).
- Create a new **Fine-grained Personal Access Token**:
  - **Select Repositories**: Choose only the `meteoscientific/website` repository.
  - **Set Permissions**:
    - **Contents**: Read and write
    - **Metadata**: Read-only
    - **Pages**: Read and write
  - **Set the Expiry Date**: Choose the maximum duration (365 days).
- **Save the token** securely (e.g., in a password manager).

---

## 2. Update Your Local Environment
- **Open your terminal**.
- **Export the new PAT**:
  ```bash
  export GIT_TOKEN=your_new_github_pat

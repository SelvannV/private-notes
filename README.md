# `expo-template` Setup Guide

Follow these steps to create a new Expo project from this template.

---

## 1. Create a repository from the template

1. Click **Use this template**.
2. Select **Create a new repository**.
3. Choose the repository owner and enter the new repository name.
4. Create the repository.

This creates a new repository containing the template files without copying the original Git history.

---

## 2. Clone the new repository locally

Clone the newly created repository:

```bash
git clone git@github.com:<OWNER>/<REPO_NAME>.git
```

Navigate into the project:

```bash
cd <REPO_NAME>
```

---

## 3. Install dependencies

Install the project dependencies:

```bash
pnpm install
```

---

## 4. Install and configure EAS

Install the Expo Application Services CLI: _(should already be done globally)_

```bash
npm install -g eas-cli
```

Login to your Expo account: _(should already be done globally)_

```bash
eas login
```

Initialize EAS for the new project:

```bash
eas init
```

This creates a new EAS project and updates your Expo configuration with the correct project ID.

---

## 5. Configure GitHub Actions

Generate an Expo access token:

1. Open the Expo dashboard:
   https://expo.dev/settings/access-tokens
2. Create a new access token.
3. Copy the generated token.

Add it to your GitHub repository secrets:

```
Repository
→ Settings
→ Secrets and variables
→ Actions
→ New repository secret
```

Create the secret:

```
Name:
EXPO_TOKEN

Value:
<your Expo access token>
```

GitHub Actions will automatically use this token for EAS builds.

---

## 6. Update project configuration

Before creating builds, update the project-specific configuration:

- App name
- Package name / bundle identifier
- App icon
- Splash screen
- Environment variables
- EAS build profiles if needed

If you modify build profiles, update the GitHub Actions workflows accordingly.

---

## 7. Start developing

Start the Expo development server:

```bash
pnpm start
```

Run on Android:

```bash
pnpm android
```

Run on iOS:

```bash
pnpm ios
```

---

## Notes

The template provides the base structure and tooling required for Expo applications.

Each application should have its own:

- Expo project configuration
- EAS project
- Environment variables
- Build credentials
- GitHub Actions secrets

After setup is complete, commit the project-specific changes:

```bash
git add .
git commit -m "Initialize project from expo-template"
git push
```

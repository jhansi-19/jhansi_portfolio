# Jhansi Gudelli — Portfolio (portfolio1)

Updated version of your existing `portfolio1` site. Plain HTML/CSS/JS —
no build step.

## What changed from your current repo

- Removed the "Portfolio Website" project card
- Added **Cloud-Based Disaster Recovery** project (with RTO/RPO highlighted)
- Added **SkillBridge** project (with GitHub link)
- Added a new **Experience** section — Infosys Springboard internship
  (FinCore Nexus bullets), linked in the nav
- Swapped in the updated résumé PDF (`G.JHANSI.pdf`)
- Removed the Intermediate (12th grade) entry from Education — only
  B.Tech remains

## Files

```
.
├── index.html
├── styles.css
├── script.js
├── G.JHANSI.pdf       # updated résumé, linked from the Resume section
├── assets/
│   └── jhansi.jpg      # your photo, used in Home and About
└── README.md
```

## Preview locally

```bash
python3 -m http.server 8000
```
Open `http://localhost:8000`.

---

## Push to your existing GitHub repo

Since `portfolio1` already exists on GitHub, clone it fresh and drop
these files in (this avoids merge conflicts with the old files you're
replacing, like the removed portfolio project card):

```bash
git clone https://github.com/jhansi-19/portfolio1.git
cd portfolio1

# remove the old files this update replaces
rm -f index.html styles.css script.js G.JHANSI.pdf jhansi.jpg

# copy in the new files from this folder (adjust the path as needed)
cp -r /path/to/this/portfolio1/* .

git add .
git commit -m "Update portfolio: new experience section, projects, resume"
git push origin main
```

If you'd rather not clone, you can also just drag-and-drop these files
into the GitHub web UI (Add file → Upload files) on the `portfolio1`
repo page, overwriting the old ones.

---

## Deploy on Vercel

If you haven't connected this repo to Vercel yet:

1. Go to [vercel.com](https://vercel.com) → sign in with GitHub
2. **Add New → Project** → select `portfolio1`
3. Framework preset: **Other** (it's static, no build command needed)
4. **Deploy**

If it's already connected, pushing to `main` will auto-redeploy — no
extra steps needed.

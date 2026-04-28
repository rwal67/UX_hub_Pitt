# Pitt HCI / UX Course Hub

This is an interactive course discovery tool for students exploring HCI and UX-relevant coursework at the University of Pittsburgh. Using HTML/CSS/JavaScript/JSON, this tool uses a flexible JSON format to collect courses, and simple JavaScript logic to filter and list them. 

It was built by:
Nina Southern | nfs26@pitt.edu,
Lucas Drinen | lud25@pitt.edu, 
Rory Walsh | rpw21@pitt.edu

for INFSCI 1750, Digital Narrative and Interactive Design Capstone. 


# For Future Reference / Viability

## Updating Course Data

All course content lives in `courses.json`. 
To add, edit, or remove a course, follow this existing format within said JSON:
```json
    {
      "name": "Course_Name",
      "num": "Course_Num",
      "dept": "Course_Dept",
      "credits": Course_Credit,
      "cats": ["Course_Cat"],
      "prereq": Y/N,
      "term": "Course_Term",
      "attr": ["Course_Att"],
      "desc": "Course_Desc"
    },
```

Valid category IDs are defined atop `courses.json` under `"categories"`.

## Updating Disciplines

Discipline cards, with descriptions, skills, career paths, and related courses, are defined in the `FIELDS` array near the top of `script.js`.

## Updating Visual Assets

Discipline icons are SVG files in the root directory (`Disc_Icon1.svg` through `Disc_Icon9.svg`). Replace any file with an updated SVG of the same filename to swap the icon.

## Deploying Updates

Currently, the site is hosted on GitHub Pages. 
After editing any file, commit and push to the `main` branch.
As for small content changes (e.g. adding a course, updating a description), files can be edited directly in the GitHub web interface without cloning the repo.

## Transferring Ownership

Should this repo find new management or a department GitHub organization, go to Settings -> Transfer repository. 
For issues directly concerning this repo, Rory Walsh can be contacted at rorywalsh425@gmail.com.

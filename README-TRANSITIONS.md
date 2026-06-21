# Columbia-HUJI Responsible Computing Workshop Site

Static website for the Columbia-HUJI Responsible Computing Workshop.

## Repository

GitHub repository: https://github.com/maspikveday-web/ColumbiaHUJIWebsite.git

```bash
git clone https://github.com/maspikveday-web/ColumbiaHUJIWebsite.git
```

For an existing checkout:

```bash
git remote set-url origin https://github.com/maspikveday-web/ColumbiaHUJIWebsite.git
```

## Structure

```text
/
├── index.html
├── past.html
├── style.css
├── components/
│   ├── schedule-reader.html
│   └── workshop-config.js
├── 2025/
│   ├── index.html
│   └── schedule.csv
├── 2026/
│   ├── index.html
│   └── schedule.csv
└── NewMaterialForColumbiHUJIWebsite/
    ├── Columbia Workshop Schedule - Feb 2025.pdf
    ├── Responsible Computing Workshop - Feb 2025.pdf
    ├── Columbia-HUJI Responsible Computing Workshop - Feb 4. 2026 (2).pdf
    ├── map of how to get there.png
    └── workshop photos
```

## Updating A Program

Each yearly page loads its schedule from that year's `schedule.csv`.

```csv
start_time,end_time,speaker,title,abstract,bio,expandable
14:00,15:00,Speaker Name,Talk Title,"Abstract text","Speaker bio",TRUE
15:00,15:30,Break,,,,FALSE
18:00,,Dinner at Jin Ramen,"Dinner details",,,FALSE
```

Use quotes around fields containing commas. Use `\n` inside CSV fields for paragraph breaks. Set `expandable` to `TRUE` for talks with abstracts or bios.

## Viewing Locally

The schedule component uses `fetch()`, so view the site through a local web server rather than opening the HTML files directly.

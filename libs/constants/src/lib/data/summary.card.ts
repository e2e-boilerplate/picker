export interface ISummaryCard {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  description: string;
  link: string;
  domain: string;
  maintained: string;
  disable: boolean;
}

export const SUMMARY_CARD: ISummaryCard = {
  "id": "browserify",
  "title": "Browserify",
  "subtitle": "Dorganize your browser code and load modules",
  "summary": "Lorem ipsum dolor sit amet, consectetur ...",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "link": "http://browserify.org",
  "domain": "browserify.org",
  "maintained": "James Halliday et al.",
  "disable": false
}

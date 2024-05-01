import Airtable from "airtable";

const airtableBase = (baseId) => {
  return new Airtable({ apiKey: import.meta.env.VITE_AIRTABLE_API_KEY }).base(baseId);
};

export default airtableBase;
import { JOBEXAMPLE } from "../JOBS";
export type jobItems = {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  salary: string;
  company: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  };
};

export async function popularJobs() {
  const PJ: jobItems[] = [];

  for (let i = 0; i <= 5; i++) {
    const jobItems = JOBEXAMPLE[i];
    PJ.push(jobItems);
  }

  return PJ;
}

export async function nearbyJobs() {
  const PJ: jobItems[] = [];

  for (let i = 5; i <= 12; i++) {
    const jobItems = JOBEXAMPLE[i];
    PJ.push(jobItems);
  }

  return PJ;
}

export async function CompanyJobs() {
  const PJ: jobItems[] = [];

  for (let i = 5; i <= 12; i++) {
    const jobItems = JOBEXAMPLE[i];
    PJ.push(jobItems);
  }

  return PJ;
}

export async function getUniqueElement(id: string) {
  const job: jobItems = JOBEXAMPLE.filter((el) => el.id === id)[0];

  return job;
}

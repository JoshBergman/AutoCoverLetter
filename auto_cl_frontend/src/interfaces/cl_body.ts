export interface ICLBody {
  firstName: string | null;
  lastName: string | null;
  cover_letter: {
    paragraph_count: number | null;
    position_title: string | null;
    company_info: {
      company_name: string | null;
      company_values: string[] | null;
      company_connection: string | null;
    };
    candidate_info: {
      skills: string[] | null;
      accomplishments: string[] | null;
    };
  };
}

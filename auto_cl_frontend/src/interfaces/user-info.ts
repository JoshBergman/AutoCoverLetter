export interface IUserInfo {
  firstName: string;
  lastName: string;
  cover_letter: {
    paragraph_count: number;
    position_title: string;
    company_info: {
      company_name: string;
      company_values: string[];
      company_connection: string;
    };
    candidate_info: {
      skills: string[];
      accomplishments: string[];
    };
  };
}

export interface IUserActions {}

export interface IUserContext {
  actions: IUserActions;
  info: IUserInfo;
}

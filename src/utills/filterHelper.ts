import { CityType, SingleCompany, StateType } from "@/services/common/types";

export const statesFormat = (states: StateType[] | null) => {
  return (
    states &&
    states.map((item) => ({
      name: item.stateName,
      value: item.id.toString(),
    }))
  );
};

export const citiesFormat = (cities: CityType[] | null) => {
  return (
    cities &&
    cities.map((item) => ({
      name: item.cityName,
      value: item.id.toString(),
    }))
  );
};

export const companyFormat = (companies: SingleCompany[] | null) => {
  return (
    companies &&
    companies.map((item) => ({
      name: item.name,
      value: item.companyId.toString(),
    }))
  );
};

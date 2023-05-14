import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const userPlatforms = () => ({
  data: platforms,
  isLoading: false,
  error: null,
});

export default userPlatforms;

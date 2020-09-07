const SPACE_UNIT = 8;

const getSpace = (space = 1): string => `${space * SPACE_UNIT}px`;
const getSpaceNumber = (space = 1): number => space * SPACE_UNIT;

export default getSpace;
export { getSpaceNumber };

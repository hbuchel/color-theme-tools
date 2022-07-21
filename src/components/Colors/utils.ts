import { isDesignToken } from '@aws-amplify/ui';

export function createTokenList(tokens: any) {
  const tokenList: any = [];
  function iterateGroup(group: any) {
    Object.values(group).forEach((value) => {
      if (isDesignToken(value)) {
        tokenList.push({
          ...value,
        });
      } else {
        iterateGroup(value);
      }
    });
  }
  if (isDesignToken(tokens)) {
    tokenList.push(tokens);
  } else {
    iterateGroup(tokens);
  }
  return tokenList;
}
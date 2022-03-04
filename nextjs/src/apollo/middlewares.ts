import { IMiddleware } from "graphql-middleware";

/**
 * Sets up server side cache 5 minutes
 */
export const setCacheHint: IMiddleware = async (
  resolve,
  root,
  args,
  context,
  info
) => {
  if (info?.cacheControl) {
    info.cacheControl.setCacheHint({ maxAge: 60 * 5 });
  }
  return resolve(root, args, context, info);
};

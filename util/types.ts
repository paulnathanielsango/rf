export type Props = {
  children?: React.ReactNode;
};

export interface MongoDBAdapterOptions {
  /**
   * The name of the {@link https://www.mongodb.com/docs/manual/core/databases-and-collections/#collections MongoDB collections}.
   */
  collections?: {
    Users?: string;
    Accounts?: string;
    Sessions?: string;
    VerificationTokens?: string;
  };
  /**
   * The name you want to give to the MongoDB database
   */
  databaseName?: string;
}

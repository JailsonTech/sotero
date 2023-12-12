export const handleDatabaseConnection = (error) => {
  if (error) throw error;
  console.log("MySQL connected...");
};

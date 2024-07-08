export type FeedbackType = {
  _id: string;
  userId: string;
  title: string;
  description: string;
  current_rating?: number;
  status?: StatusFeedback;
  createdAt: string;
  updatedAt: string;
};

export type StatusFeedback =
  | "Not Started"
  | "In Progress"
  | "Done"
  | "Archived";
// export type CategoryFeedback = ""

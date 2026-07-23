export interface Article {
  title: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
}

export const articlesData: Record<string, Article> = {
  "buckle-up": {
    title: "Seatbelt Safety: Protecting Every Life on Nigerian Roads",
    category: "Driver Safety",
    date: "July 11, 2026",
    readTime: "4 min read",
    content: [
      "Seatbelts are the single most effective safety feature in modern vehicles. Yet, thousands of motorists neglect this simple action daily.",
      "When a crash occurs, a seatbelt secures you to your seat, preventing you from being thrown against the dashboard, windshield, or completely out of the vehicle.",
      "For a seatbelt to work effectively, ensure the lap belt rests securely across your hips, and the shoulder strap crosses the center of your chest. Make it a rule: no one moves until everyone is buckled up."
    ]
  },
  "cross-safely": {
    title: "Pedestrian Safety: Master the Art of the Zebra Crossing",
    category: "Pedestrian Safety",
    date: "July 10, 2026",
    readTime: "3 min read",
    content: [
      "Pedestrians are among the most vulnerable road users in urban environments. Navigating busy city crossings requires both patience and sharp awareness.",
      "Always utilize designated zebra crossings. Before stepping onto the asphalt, establish direct eye contact with oncoming drivers to guarantee they see you and are actively slowing down.",
      "Never look down at your phone while crossing. Stay fully alert until you have safely stepped onto the opposite curb."
    ]
  }
};
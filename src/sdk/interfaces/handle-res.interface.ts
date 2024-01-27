
// Propose an interface which BE app can implement and then 
// they can stored data from KB SDK responses.

export interface IHandleKBRes {
    createKnowledgeBase();
    chatWithKnowledgeBase();
    importDataToKnowledgeBase();
}
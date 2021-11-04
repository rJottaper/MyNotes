import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAllTopics = async () => {
  try {
    const topics = await AsyncStorage.getItem('topics');
    return topics ? JSON.parse(topics) : [];
  } catch (e) {
    console.log(e);
  };
};

export const saveTopic = async (topic) => {
  try {
    const rawTopics = await AsyncStorage.getItem('topics');
    const topics = rawTopics ? JSON.parse(rawTopics) : [];
    topics.push(topic);
    await AsyncStorage.setItem('topics', JSON.stringify(topics));
    return true;
  } catch (e) {
    console.log(e);
  };
};

export const getAllNotes = async () => {
  try {
    const notes = await AsyncStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
  } catch (e) {
    console.log(e);
  };
};

export const saveNote = async (note) => {
  try {
    const rawNotes = await AsyncStorage.getItem('notes');
    const notes = rawNotes ? JSON.parse(rawNotes) : [];
    notes.push(note);
    await AsyncStorage.setItem('notes', JSON.stringify(notes));
  } catch (e) {
    console.log(e);
  };
};




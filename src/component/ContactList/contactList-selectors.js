export const getCont = state => state.counter.contact;
export const getFilt = state => state.counter.filter;

export const getVisibleContacts = (state) => {
   const filter = getFilt(state);
   const allContact = getCont(state);
   const normalizeFilter = filter.toLowerCase();
   return allContact.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
};
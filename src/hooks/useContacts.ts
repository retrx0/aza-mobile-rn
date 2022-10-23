import React from "react";
import * as Contacts from "expo-contacts";

export const getUserContacts = async () => {
  const { status } = await Contacts.requestPermissionsAsync();
  if (status === "granted") {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
    });

    return data;
  }
  return null;
};

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  logo: {
    backgroundColor: "#0D0D0D",
    height: 173,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    paddingStart: 24,
    paddingEnd: 24,
    width: "100%",
    flexDirection: "row",
    marginTop: -26,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#262626",
    borderRadius: 5,
    color: "#FFFF",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  counters: {
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 32,
    paddingStart: 24,
    paddingEnd: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  counter: {
    flexDirection: "row",
    gap: 5,
  },
  counter_created: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#4EA8DE",
  },
  counter_value: {
    backgroundColor: "#333333",
    color: "#D9D9D9",
    fontWeight: "bold",
    fontSize: 16,
    paddingStart: 7,
    paddingEnd: 7,
    paddingTop: 2,
    paddingBottom: 2,
    textAlign: "center",
    width: 40,
    height: 25,
    borderRadius: 10,
    overflow: "hidden",
  },
  counter_done: { fontWeight: "bold", fontSize: 16, color: "#8284FA" },
  line: {
    marginStart: 24,
    marginEnd: 24,
    borderBottomColor: "#333333",
    paddingTop: 24,
    borderBottomWidth: 2,
  },
  empty_container: {
    paddingTop: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  empty_container_title: {
    paddingTop: 16,
    paddingBottom: 5,
    color: "#808080",
    fontWeight: "bold",
    fontSize: 14,
  },
  empty_container_subtitle: {
    color: "#808080",
    fontSize: 14,
  },
  list_checkbox: {
    marginStart: -10,
    borderRadius: 15,
  },
  list_row: {
    borderRadius: 10,
    paddingStart: 24,
    marginTop: 8,
    height: 64,
    backgroundColor: "#262626",
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
    marginStart: 24,
    marginEnd: 24,
  },
  list_button: {
    width: 32,
    height: 32,
    paddingEnd: 8,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  list_text: {
    color: "#F2F2F2",
    flex: 1,
    textAlign: "left",
  },
  list_text_done: {
    color: "#808080",
    flex: 1,
    textDecorationLine: "line-through",
    textAlign: "left",
  },
});

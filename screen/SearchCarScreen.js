import React, { useState, useEffect } from "react";
import {
	View,
	StyleSheet,
	KeyboardAvoidingView,
	Image,
	Platform,
	Text,
	TextInput,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import CarAdCard from "../components/CarAdCard/CarAdCard";
import { useNavigation, useRoute, useFocusEffect } from "@react-navigation/native";

const SearchCarScreen = () => {
	const [Search, setSearch] = useState("");
	const navigation = useNavigation();
	const route = useRoute();

	const [receivedValue, setReceivedValue] = useState("");

	// useEffect hook to run code when component mounts
	useEffect(() => {
		// Check if the user navigated from a specific screen
		if (route.params && route.params.filters) {
			setReceivedValue(route.params.filters);
		}
	}, [route.params]); // Re-run effect when route params change

	// useFocusEffect hook to run code when the screen is focused
	useFocusEffect(
		React.useCallback(() => {
			// Check if the user navigated from a specific screen
			if (route.params && route.params.filters) {
				setReceivedValue(route.params.filters);
			}
		}, [route.params]) // Re-run effect when route params change
	);

	console.log("Filters", receivedValue);
	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}>
			<StatusBar backgroundColor="#b2d8ff" />
			<View style={styles.container}>
				<View style={styles.headingContainer}>
					<View style={{ flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "space-between" }}>
						<Image
							source={require("./../assets/back-arrow.png")}
							style={{ height: 30, width: 30, resizeMode: "center" }}
						/>
						<TextInput
							placeholder="Search Car"
							value={Search}
							onChange={setSearch}
							style={{ backgroundColor: "white", height: 40, width: "85%", paddingLeft: 10, borderRadius: 30 }}
						/>
					</View>
				</View>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate("FilterCarScreen");
					}}
					style={styles.filterButton}>
					<Text style={{ fontSize: 11 }}>Filter</Text>
				</TouchableOpacity>
				{/* List of Ads Here */}
				<FlatList
					data={[0, 1, 2, 3, 4, 5, 8]}
					renderItem={({ item, index }) => {
						return <CarAdCard />;
					}}
					key={(item) => {
						item;
					}}
					contentContainerStyle={{}}
				/>
			</View>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	headingContainer: {
		backgroundColor: "#b2d8ff",
		paddingVertical: 10,
		paddingHorizontal: 30,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
		width: "100%",
		position: "absolute",
		top: 25,
		zIndex: 1,
	},
	heading: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#000",
		textAlign: "center",
	},
	content: {
		// // flexGrow: 1,
		// padding: 0,
	},
	filterButton: {
		width: 55,
		height: 25,
		alignSelf: "flex-start",
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
		marginTop: 100,
		marginBottom: 10,
		marginLeft: 25,
		borderWidth: 0.5,
		borderRadius: 10,
	},
});

export default SearchCarScreen;

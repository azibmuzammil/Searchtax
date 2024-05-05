import { SafeAreaView, StyleSheet, Text, View, TextInput, StatusBar, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useRoute, useNavigation } from "@react-navigation/native";

const Gap = ({ gap }) => {
	return (
		<View
			style={{
				height: gap,
			}}
		/>
	);
};

const Line = () => {
	return (
		<View
			style={{
				borderBottomColor: "grey",
				borderBottomWidth: 1,
			}}
		/>
	);
};

const InputField = ({ title, half = false, placeholder, val1, updateVal1, val2 = null, updateVal2 = null }) => {
	return (
		<View
			style={{
				width: "90%",
				alignSelf: "center",
			}}>
			<Text>{title}</Text>
			<Gap gap={10} />
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}>
				<TextInput
					value={val1}
					onChangeText={updateVal1}
					style={{
						borderWidth: 1,
						borderColor: "gray",
						padding: 10,
						borderRadius: 10,
						width: half ? "45%" : "100%", // Take up entire parent width
					}}
					placeholder="palceholder"
				/>
				{half && (
					<>
						<Text>to</Text>
						<TextInput
							value={val2}
							onChangeText={updateVal2}
							style={{
								borderWidth: 1,
								borderColor: "gray",
								padding: 10,
								borderRadius: 10,
								width: half ? "45%" : "100%", // Take up entire parent width
							}}
							placeholder="placeholder"
						/>
					</>
				)}
			</View>
			<Gap gap={10} />
			<Line />
		</View>
	);
};

const FilterCarScreen = ({}) => {
	const route = useRoute();
	const navigation = useNavigation();
	const [filters, setFilters] = useState({
		priceMin: "",
		priceMax: "",
		mileAgeMin: "",
		mileAgeMax: "",
		variant: "",
		condition: "",
		location: "",
		maker: "",
		color: "",
		transmission: "",
	});
	const handleInputChange = (fieldName, value) => {
		setFilters((prevState) => ({
			...prevState,
			[fieldName]: value,
		}));
	};

	console.log("jshhjsjk", filters);

	return (
		<SafeAreaView>
			<StatusBar backgroundColor="#b2d8ff" />
			<ScrollView>
				<Gap gap={100} />
				<InputField
					half={true}
					title={"Price Range"}
					val1={filters.priceMin}
					updateVal1={(val) => handleInputChange("priceMin", val)}
					val2={filters.priceMax}
					updateVal2={(val) => handleInputChange("priceMax", val)}
				/>
				<InputField
					half={true}
					title={"Mileage"}
					val1={filters.mileAgeMin}
					updateVal1={(val) => handleInputChange("mileAgeMin", val)}
					val2={filters.mileAgeMax}
					updateVal2={(val) => handleInputChange("mileAgeMax", val)}
				/>
				<InputField title={"Variant"} val1={filters.variant} updateVal1={(val) => handleInputChange("variant", val)} />
				<InputField
					title={"location"}
					val1={filters.location}
					updateVal1={(val) => handleInputChange("location", val)}
				/>
				<InputField title={"Color"} val1={filters.color} updateVal1={(val) => handleInputChange("color", val)} />
				<InputField title={"Maker"} val1={filters.maker} updateVal1={(val) => handleInputChange("maker", val)} />
				<InputField
					title={"Condition"}
					val1={filters.condition}
					updateVal1={(val) => handleInputChange("condition", val)}
				/>
				<InputField
					title={"Transmission"}
					val1={filters.transmission}
					updateVal1={(val) => handleInputChange("transmission", val)}
				/>

				<Gap gap={10} />
				<TouchableOpacity
					onPress={() => {
						navigation.navigate("SearchCarScreen", {
							filters: filters,
						});
					}}
					style={{
						width: 55,
						height: 25,
						alignSelf: "flex-start",
						justifyContent: "center",
						flexDirection: "row",
						alignItems: "center",

						marginBottom: 10,
						marginLeft: 25,
						borderWidth: 0.5,
						borderRadius: 10,
						alignSelf: "center",
					}}>
					<Text>Filter</Text>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
};

export default FilterCarScreen;

const styles = StyleSheet.create({});

import { NativeBaseProvider, Center, HStack, Button, Text } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { decreaseOne, increaseOne } from "../redux/counterSlice";
import { selectCounter } from "../redux/counterSlice";

const HomeScreen = () => {

   const counterValue = useSelector(selectCounter);
 
   const dispatch = useDispatch();
 
   return (
     <NativeBaseProvider>
       <Center flex={1} bg={"white"}>
         <HStack space={20}>
           <Button borderRadius={0} width={70} onPress={() => dispatch(increaseOne(counterValue + 1))}>
             <Text fontSize={40} color="white">+</Text>
           </Button>
           <Button borderRadius={0} width={70} onPress={() => dispatch(decreaseOne(counterValue - 1))}>
             <Text fontSize={40} color="white">-</Text>
           </Button>
         </HStack>
         <Text fontSize={40} mt={20} color={"black"}>
           {counterValue}
         </Text>
       </Center>
     </NativeBaseProvider>
   );
 }

 export default HomeScreen;
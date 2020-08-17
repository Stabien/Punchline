<Tab.Navigator
    screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Historique')
                iconName = 'ios-stats';
            else if (route.name === 'Catégories')
                iconName = 'ios-stats';
            return <Ionicons name={iconName} size={size} color={color} />;
        },
    })}
    tabBarOptions={{
        activeTintColor: '#43BCFF',
        inactiveTintColor: 'gray',
    }}
>
    <Tab.Screen name="Catégories" component={DisplayCategories}/>
    <Tab.Screen name="Historique" component={Historique}/>
</Tab.Navigator>

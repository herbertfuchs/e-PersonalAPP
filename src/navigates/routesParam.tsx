export type RouteParamList = {
    Home: undefined;
    Register: undefined;
    Login: undefined;
    
};

export type RouteStackParamList<T extends keyof RouteParamList> = {
    navigation: StackNavigationProp<RouteParamList, T>;
    route: RouteProp<RouteParamList, T>;
};
import styled from "@emotion/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.accent};
    align-items: center;
    justify-content: center;
`;

export const SubContainer = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.accent};
    align-items: center;
    justify-content: center;
`;

export const TitlePrimary = styled.Text`
    width: 100%;
    text-align: center;
    font-size: 50px;
    color: ${({theme}) => theme.colors.text};
    text-shadow: 3px 3px 3px ${({theme}) => theme.colors.titleSecondary};
`;
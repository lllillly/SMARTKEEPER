import styled from "styled-components";
import { appearAnimation } from "./AnimationCommon";

////////////////////////////////////////////////Wrapper////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

/** Props List **
 * width        : width
 * height       : height
 * dr           : flex-direction
 * al           : align-items
 * ju           : justify-content
 * bgColor      : background
 * color        : color
 * index        : z-index
 *  */
export const WholeWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  display: ${(props) => props.display || `flex`};
  background: ${(props) => props.bgColor};
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  background-image: ${(props) => props.bgImg};
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  box-shadow: ${(props) => props.boxShadow};
  z-index: ${(props) => props.index};
  position: ${(props) => (props.isAbsolute ? `absolute` : ``)};
  position: ${(props) => (props.isRelative ? `relative` : ``)};
  position: ${(props) => (props.isFixed ? `fixed` : ``)};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  animation: ${appearAnimation} 1s forwards;
  border-radius: ${(props) => props.radius};
  overflow-x: ${(props) => props.overflowX || `hidden`};
  overflow-y: ${(props) => props.overflowY || `hidden`};

  & .MuiCheckbox-root,
  & .MuiCheckbox-colorSecondary.Mui-checked,
  & .MuiRadio-root,
  & .MuiRadio-colorSecondary.Mui-checked {
    color: ${(props) => props.theme.white_C} !important;
  }

  & .MuiSvgIcon-root {
    font-size: 1.2rem;
  }

  & .MuiTypography-body1 {
    font-size: 14px;
    color: #a3a3a3;
  }

  & .magnifier-image {
    object-fit: cover;
  }

  @media (max-width: 900px) {
    .MuiFormControlLabel-root {
      margin-right: 0;
    }

    & .MuiTypography-body1 {
      font-size: 13px;
    }
  }
`;

/** Props List **
 * width        : width
 * height       : height
 * dr           : flex-direction
 * al           : align-items
 * ju           : justify-content
 * bgColor      : background
 * color        : color
 *
 *  */
export const Wrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  flex-wrap: ${(props) => props.wrap || `wrap`};
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  position: ${(props) => (props.isAbsolute ? `absolute` : ``)};
  position: ${(props) => (props.isRelative ? `relative` : ``)};
  position: ${(props) => (props.isFixed ? `fixed` : ``)};
  position: ${(props) => (props.isSticky ? `sticky` : ``)};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  z-index: ${(props) => props.zIndex};
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderBottom};
  border-top: ${(props) => props.borderTop};
  border-right: ${(props) => props.borderRight};
  border-left: ${(props) => props.borderLeft};
  border-radius: ${(props) => props.radius};
  box-shadow: ${(props) => props.shadow};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  overflow: ${(props) => props.overflow};
  overflow-x: ${(props) => props.overflowX};
  overflow-y: ${(props) => props.overflowY};
  backdrop-filter: ${(props) => (props.isFilter ? `blur(5px)` : ``)};
  background-image: ${(props) => props.bgImg};
  background-size: ${(props) => props.bgSize || `cover`};
  background-repeat: no-repeat;
  background-attachment: ${(props) => props.attachment || `fixed`};
  background-position: ${(props) => props.bgPosition || `center`};

  transform: ${(props) => props.transform};

  transition: ${(props) => props.transition};
  cursor: ${(props) => props.cursor};
  line-height: ${(props) => props.lineHeight};
  text-align: ${(props) => props.textAlign};
  letter-spacing: ${(props) => props.letterSpacing};
  animation: ${appearAnimation} 1s forwards;
  opacity: ${(props) => props.opacity};
  font-family: ${(props) =>
    props.isGotham
      ? `'Gotham Black', sans-serif`
      : `'Noto Sans CJK KR', 'Noto Sans KR', sans-serif`};

  & pre {
    white-space: pre-wrap;
    line-height: 1.4;
    color: ${(props) => props.theme.darkGrey_C};
    font-size: 14px;
  }

  &:hover {
    box-shadow: ${(props) =>
      props.isShadowHover ? `15px 20px ${props.theme.lightBasicTheme_c};` : ``};
    box-shadow: ${(props) =>
      props.isShadowHover2
        ? `15px -20px ${props.theme.lightBasicTheme_c};`
        : ``};
    box-shadow: ${(props) =>
      props.isShadowHover3
        ? `-15px 20px ${props.theme.lightBasicTheme_c};`
        : ``};
    box-shadow: ${(props) =>
      props.isShadowHover4
        ? `-15px -20px ${props.theme.lightBasicTheme_c};`
        : ``};
  }

  & .react-reveal {
    width: 100%;
  }

  &.mm19 .react-reveal {
    display: flex;
    flex-direction: center;
    justify-content: center;
  }
`;

/** Props List **
 * width        : width
 * height       : height
 * dr           : flex-direction
 * al           : align-items
 * ju           : justify-content
 * bgColor      : background
 * color        : color
 *
 *  */
export const RsWrapper = styled.div`
  width: ${(props) => props.width || `1230px`};
  height: ${(props) => props.height || `100%`};
  ${(props) => props.minHeight && `min-height: ${props.minHeight};`}
  color: ${(props) => props.color};
  display: ${(props) => props.display || `flex`};
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  flex-wrap: ${(props) => props.wrap || `wrap`};
  backdrop-filter: ${(props) => props.filter};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  overflow: ${(props) => props.overflow};
  border-bottom: ${(props) => props.borderBottom};
  border: ${(props) => props.border};
  font-size: ${(props) => props.fontSize};
  position: ${(props) => (props.isRelative ? `relative` : ``)};
  position: ${(props) => (props.isAbsolute ? `absolute` : ``)};
  top: ${(props) => props.top};
  left: ${(props) => props.letf};

  @media (max-width: 1100px) {
    width: 900px;
  }
  @media (max-width: 900px) {
    width: 800px;
  }
  @media (max-width: 800px) {
    width: 700px;
  }
  @media (max-width: 700px) {
    width: 100%;
    padding-left: ${(props) => props.paddingLeft};
    padding-right: ${(props) => props.paddingRight};
  }
`;

/** Props List **
 * width        : width
 * height       : height
 * dr           : flex-direction
 * al           : align-items
 * ju           : justify-content
 * bgColor      : background
 * color        : color
 *
 *  */
export const SearchWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height};
  color: ${(props) => props.theme.darkGrey_C};
  display: flex;
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `flex-end`};
  position: ${(props) => (props.isAbsolute ? `absolute` : ``)};
  position: ${(props) => (props.isRelative ? `relative` : ``)};
  border: ${(props) => props.border};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};

  & svg {
    font-size: ${(props) => props.fontSize || `15px`};
    cursor: pointer;
    text-align: center;
    width: 30px;
    height: 30px;
    padding: 4px;
    position: absolute;
    right: 0;
    top: 0;
  }

  @media (max-width: 700px) {
    justify-content: ${(props) => props.ju || `center`};
  }
`;

export const UlWrapper = styled.ul`
  width: ${(props) => props.width || `100%`};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  display: flex;
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  flex-wrap: ${(props) => props.wrap || `wrap`};
  background: ${(props) => props.bgColor};
  position: ${(props) => (props.isRelative ? `relative` : ``)};
  position: ${(props) => (props.isAbsolute ? `absolute` : ``)};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  color: ${(props) => props.color};
  border-right: ${(props) => props.borderRight};
  border-left: ${(props) => props.borderLeft};
  border-bottom: ${(props) => props.borderBottom};
  border-top: ${(props) => props.borderTop};
  border-radius: ${(props) => props.radius};
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  overflow: ${(props) => (props.ishidden ? `hidden` : ``)};
  transition: 0.3s;
  animation: ${appearAnimation} 1s forwards;
  z-index: ${(props) => props.zIndex};
`;

export const LiWrapper = styled.li`
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  display: flex;
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  flex-wrap: ${(props) => props.wrap};
  position: ${(props) => (props.isRelative ? `relative` : ``)};
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  border-right: ${(props) => props.borderRight};
  border-top: ${(props) => props.borderTop};
  border-left: ${(props) => props.borderLeft};
  border-bottom: ${(props) => props.borderBottom};
  border-radius: ${(props) => props.radius};
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
  line-height: ${(props) => props.lineHeight};
  box-shadow: ${(props) => props.shadow};
  cursor: ${(props) => props.cursor};
  transition: 0.4s;
  z-index: ${(props) => props.zIndex};

  &:hover {
    background: ${(props) =>
      props.isBgHover ? `${props.theme.basicTheme_C}` : ``};
    color: ${(props) => (props.isBgHover ? `${props.theme.white_C}` : ``)};
    border: ${(props) =>
      props.isBorderHover ? `1px solid ${props.theme.subTheme_C}` : ``};
  }
`;

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////Input/////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
/** Props List **
 * width            : width [required]
 * height           : height
 * transition       : transition
 * margin           : margin
 *  */
export const TextInput = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height || `40px`};
  border: ${(props) => props.border || `1px solid ${props.theme.greyTheme7_C}`};
  padding: ${(props) => props.padding || props.theme.inputPadding};
  transition: ${(props) => props.transition || props.theme.transition};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bgColor || `transparent`};
  font-size: 14px;
  border-radius: ${(props) => props.radius};
  color: ${(props) => props.color || props.theme.white_C};

  &:focus {
    border: ${(props) =>
      props.focusBorder || `1px solid ${props.theme.white_C}`};
  }

  &::placeholder {
    color: ${(props) => props.placeholderColor || props.theme.greyTheme7_C};
    font-size: ${(props) => props.placeholderFontSize};
  }

  &:read-only {
    background-color: ${(props) => props.theme.greyTheme7_C};
    background-color: ${(props) => props.readOnlyColor};
    cursor: auto;
  }

  &:read-only:focus {
    box-shadow: none;
  }
`;

export const TextInput2 = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height || `30px`};
  border-bottom: 2px solid ${(props) => props.theme.create_B_C};
  background-color: ${(props) => props.bgColor};
  padding: ${(props) => props.padding || props.theme.inputPadding};
  transition: ${(props) => props.transition || props.theme.transition};
  margin: ${(props) => props.margin};
  position: relative;
  &:focus {
    box-shadow: ${(props) => props.theme.boxShadow};
    border-bottom: 2px solid ${(props) => props.theme.check_B_C};
  }
`;

export const TextArea = styled.textarea`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `280px`};
  padding: ${(props) => props.padding || `15px`};
  border: ${(props) => props.border || `1px solid ${props.theme.greyTheme7_C}`};
  /* border-radius: ${(props) => props.theme.radius}; */
  transition: ${(props) => props.transition || props.theme.transition};
  margin: ${(props) => props.margin};
  resize: none;
  background: rgba(142, 142, 142, 0.05);
  color: ${(props) => props.color};

  &:focus {
    border: ${(props) => props.border || `1px solid ${props.theme.white_C}`};
  }

  &::placeholder {
    color: ${(props) => props.theme.greyTheme7_C};
    line-height: 2;
    padding: ${(props) => props.placePadding};
  }

  @media (max-width: 900px) {
    height: ${(props) => props.height || `218px`};
  }
`;

export const Combo = styled.select`
  width: ${(props) => props.width || `164px`};
  height: ${(props) => (props.height ? props.height : `18px`)};
  background-color: ${(props) => props.bgColor || props.theme.white_C};
  border: ${(props) => props.border || `none`};
  color: ${(props) => props.color || props.theme.greyTheme1_C};
  /* border-radius: ${(props) => props.theme.radius}; */
  margin: ${(props) => props.margin || `0px 5px`};
  padding: ${(props) => props.padding || `0px 5px`};
  /* box-shadow: ${(props) =>
    props.shadow ? props.shadow : `0px 3px 6px ${props.theme.grey_C};`}; */
  outline: none;
  font-size: 12px;

  @media (max-width: 900px) {
    width: ${(props) => props.width || `143px`};
    height: ${(props) => (props.height ? props.height : `16px`)};
    font-size: 8px;
  }
`;

export const ComboOption = styled.option``;

export const Label = styled.label`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  cursor: pointer;

  & .MuiFormControlLabel-root svg {
    font-size: 20px;
    margin-bottom: 1px;
    color: ${(props) => props.theme.basicTheme_C};
  }
  & .main.MuiFormControlLabel-root svg {
    color: ${(props) => props.theme.black_C};
  }
`;

/** Props List **
 * width            : width [required]
 * kindOf             : [check, create, update, delete] [required]
 * height           : height
 * transition       : transition
 * margin           : margin
 * padding          : padding
 *  */
export const CommonButton = styled.button`
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height || `40px`};
  transition: ${(props) => props.transition || props.theme.transition};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  display: flex;
  flex-direction: ${(props) => props.dr || `row`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  color: ${(props) => props.theme.white_C};
  border-radius: ${(props) => props.radius};

  ${(props) => !props.kindOf && `background : ${props.theme.basicTheme_C};`}
  ${(props) =>
    props.kindOf === `darkGrey` && `background : ${props.theme.darkGrey_C};`}
  ${(props) => props.kindOf === `white` && `background : transparent;`}
  ${(props) => props.kindOf === `white` && `color : ${props.theme.white_C};`}
      ${(props) =>
    props.kindOf === `white` && `border : 1px solid ${props.theme.white_C};`}
     ${(props) =>
    props.kindOf === `black` && `background : ${props.theme.black_C};`}
  ${(props) => props.kindOf === `black` && `color : ${props.theme.white_C};`}
  
    ${(props) =>
    props.kindOf === `subTheme` && `background : ${props.theme.subTheme_C};`}
  ${(props) => props.kindOf === `subTheme` && `color : ${props.theme.white_C};`}
      ${(props) =>
    props.kindOf === `subTheme` &&
    `border : 1px solid ${props.theme.subTheme_C};`}

${(props) =>
    props.kindOf === `subTheme2` && `background : ${props.theme.white_C};`}
  ${(props) =>
    props.kindOf === `subTheme2` && `color : ${props.theme.black_C};`}
      ${(props) =>
    props.kindOf === `subTheme2` &&
    `border : 1px solid ${props.theme.black_C};`}

    ${(props) =>
    props.kindOf === `grey` && `background : ${props.theme.greyTheme8_C};`}
  ${(props) => props.kindOf === `grey` && `color : ${props.theme.white_C};`}
      ${(props) =>
    props.kindOf === `grey` &&
    `border : 1px solid ${props.theme.greyTheme8_C};`}
      ${(props) =>
    props.kindOf === `create` && `background : ${props.theme.create_B_C};`}
  ${(props) =>
    props.kindOf === `check` && `background : ${props.theme.check_B_C};`}
  ${(props) =>
    props.kindOf === `update` && `background : ${props.theme.update_B_C};`}
  ${(props) =>
    props.kindOf === `delete` && `background : ${props.theme.delete_B_C};`}
      ${(props) =>
    props.kindOf === `default` && `background : ${props.theme.grey_C};`}
    ${(props) =>
    props.kindOf === `naver` && `border : 1px solid ${props.theme.naver_C}`}
      ${(props) =>
    props.kindOf === `naver` && `color : ${props.theme.black_C};`}
         ${(props) =>
    props.kindOf === `naver` && `background : ${props.theme.white_C};`}
    ${(props) => props.kindOf === `kakao` && `color : ${props.theme.black_C};`}
         ${(props) =>
    props.kindOf === `kakao` && `background : ${props.theme.white_C};`}
${(props) => props.kindOf === `google` && `color : ${props.theme.black_C};`}
         ${(props) =>
    props.kindOf === `google` && `background : ${props.theme.white_C};`}
     ${(props) =>
    props.kindOf === `google` && `border : 1px solid ${props.theme.google_C};;`}

      

  & svg {
    font-size: 25px;
  }

  &:hover {
    background: ${(props) => props.theme.white_C};
    color: ${(props) => props.theme.darkGrey_C};
    box-shadow: ${(props) => props.theme.boxShadowV3};
    ${(props) =>
      !props.kindOf && `border :1px solid ${props.theme.basicTheme_C};`}
    ${(props) =>
      props.kindOf === `white` && `background ${props.theme.subTheme_C};`}
         ${(props) =>
      props.kindOf === `white` && `color ${props.theme.white_C};`}
${(props) => props.kindOf === `black` && `background : ${props.theme.white_C};`}
  ${(props) => props.kindOf === `black` && `color : ${props.theme.black_C};`}
  ${(props) =>
      props.kindOf === `black` && `border : 1px solid ${props.theme.black_C};`}
        ${(props) =>
      props.kindOf === `subTheme` && `color ${props.theme.subTheme_C};`}
          ${(props) =>
      props.kindOf === `subTheme` && `background ${props.theme.white_C};`}

${(props) =>
      props.kindOf === `subTheme2` && `background : ${props.theme.black_C};`}
  ${(props) =>
      props.kindOf === `subTheme2` && `color : ${props.theme.white_C};`}
      ${(props) =>
      props.kindOf === `subTheme2` &&
      `border : 1px solid ${props.theme.black_C};`}


      ${(props) => props.kindOf === `grey` && `color ${props.theme.white_C};`}
          ${(props) =>
      props.kindOf === `grey` && `background ${props.theme.grey_C};`}
         ${(props) =>
      props.kindOf === `create` &&
      `border :1px solid ${props.theme.create_B_C};`}
    ${(props) =>
      props.kindOf === `check` && `border :1px solid ${props.theme.check_B_C};`}
    ${(props) =>
      props.kindOf === `update` &&
      `border :1px solid ${props.theme.update_B_C};`}
    ${(props) =>
      props.kindOf === `delete` &&
      `border :1px solid ${props.theme.delete_B_C};`}

${(props) => props.kindOf === `naver` && `background : ${props.theme.naver_C}`}
        ${(props) =>
      props.kindOf === `naver` && `color : ${props.theme.white_C};`}
        ${(props) => props.kindOf === `naver` && `border : none;`}

  ${(props) => props.kindOf === `google` && `border : none;`}
${(props) => props.kindOf === `kakao` && `background : ${props.theme.kakao_C};`}
      ${(props) =>
      props.kindOf === `kakao` && `color : ${props.theme.white_C};`}
        ${(props) => props.kindOf === `kakao` && `border : none;`}
        
        ${(props) =>
      props.kindOf === `google` && `color : ${props.theme.white_C};`}
  ${(props) =>
      props.kindOf === `google` && `background : ${props.theme.google_C};`}
  }
`;

export const FlipButton = styled.div`
  width: 150px;
  height: 40px;
  position: relative;
  margin: ${(props) => props.margin || `10px`};

  &:before {
    content: ${(props) => props.content || `""`};
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${(props) =>
      props.bgColor || `${props.theme.basicTheme_C}`};
    top: 0;
    left: 0;
    color: ${(props) => props.color || `${props.theme.white_C}`};
    transition: 0.8s;
  }
  &:after {
    content: ${(props) => props.content || `""`};
    width: calc(100% - 4px);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    color: ${(props) => props.color || `${props.theme.white_C}`};
    border: ${(props) =>
      props.border || `2px solid ${props.theme.basicTheme_C}`};
    background-color: ${(props) => props.bgColor || `${props.theme.white_C}`};
    transform: translateY(20px) rotateX(-90deg);
    transition: 0.8s;
  }

  &:hover:before {
    transform: rotateX(-90deg) translateY(0px);
    top: -20px;
  }

  &:hover:after {
    transform: translateY(0) rotateX(0);
  }
`;

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////SubTitle////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

export const CommonSubTitle = styled.h2`
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize || `47px`};
  font-weight: ${(props) => props.fontWeight || `700`};
  color: ${(props) => props.color};
  position: relative;
  margin: ${(props) => props.margin || `0 0 25px`};
  display: ${(props) => props.display || `flex`};
  align-items: center;
  color: ${(props) => props.color || `${props.theme.white_C}`};
  line-height: ${(props) => props.lineHeight};

  font-family: ${(props) =>
    props.isGotham
      ? `'Gotham Black', sans-serif`
      : `'Noto Sans CJK KR', 'Noto Sans KR', sans-serif`};
`;

export const CommonSubTitle2 = styled.h2`
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize || `60px`};
  font-weight: ${(props) => props.fontWeight || `900`};
  color: ${(props) => props.color};
  position: relative;
  margin: ${(props) => props.margin || `0 0 25px`};
  display: ${(props) => props.display || `flex`};
  align-items: center;
  color: ${(props) => props.color || `${props.theme.blackTheme2_C}`};
  line-height: ${(props) => props.lineHeight};
  text-shadow: ${(props) => props.shadow};

  font-family: ${(props) =>
    props.isGotham
      ? `'Gotham Black', sans-serif`
      : `'Noto Sans CJK KR', 'Noto Sans KR', sans-serif`};

  @media (max-width: 700px) {
    font-size: ${(props) => props.fontSize || `30px`};
    margin: 0 0 15px;
  }
`;

export const SubjectTitle = styled.h3`
  width: ${(props) => props.width};
  display: ${(props) => props.display};
  align-items: ${(props) => props.al};
  justify-content: ${(props) => props.ju};
  position: relative;
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize || `16px`};
  font-weight: ${(props) => props.fontWeight || `400`};
  padding: 10px 0;
  color: ${(props) => props.color || `#666666`};
`;

export const SubjectText = styled.h4`
  width: ${(props) => props.width};
  position: relative;
  margin: 0px 0 30px;
  padding-bottom: 40px;
  font-size: ${(props) => props.fontSize || `24px`};
  color: ${(props) => props.color || `#666666`};
`;

export const SubTitle = styled.h2`
  width: ${(props) => props.width};
  text-align: center;
  display: inline-block;
  font-size: ${(props) => props.fontSize || `18px`};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background: ${(props) => props.bgColor};
  border-bottom: ${(props) => props.borderBottom};
  border-bottom: 2px solid;
  border-image: linear-gradient(127deg, #ec2f4b 0%, #009fff 100%) 1;
  background: linear-gradient(127deg, #ec2f4b 0%, #009fff 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

export const MapTitle = styled.h3`
  width: 100%;
  font-size: ${(props) => props.fontSize || `26px`};
  line-height: 1.1em;
  font-weight: 600;
  padding-bottom: 10px;
  color: ${(props) => props.color};
  margin-bottom: 30px;
  position: relative;
  margin-top: ${(props) => props.marginTop || `0px`};

  &:before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 35px;
    height: 100%;
    border-bottom: 6px solid ${(props) => props.theme.lightBasicTheme_c};
  }
`;

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////Table////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

/** Props List **
 * width            : width [required]
 * ju               : justify-content
 *  */

export const TableWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${(props) => props.margin || `20px 0px 30px`};
  padding: ${(props) => props.margin};

  @media (max-width: 700px) {
    display: none;
  }
`;

export const TableHead = styled.ul`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${(props) => props.shadow};
  margin: ${(props) => props.margin};
  border-bottom: ${(props) =>
    props.borderBottom || `1px solid ${props.theme.lightGrey_C}`};
  border-top: ${(props) =>
    props.borderTop || `3px solid ${props.theme.black_C}`};
  border-radius: ${(props) => props.radius || ``};
  background: ${(props) => props.theme.white_C};
  color: ${(props) => props.theme.black_C};
`;

export const TableHeadLIST = styled.li`
  width: ${(props) => props.width};
  height: 100%;
  display: ${(props) => props.display || `flex`};
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.ju || `center`};
  font-weight: 500;
`;

export const TableBody = styled.ul`
  width: 100%;
  height: ${(props) => props.height || `55px`};
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.ju || `space-between`};
  color: ${(props) => props.color};

  border-bottom: ${(props) =>
    props.borderBottom || `1px solid ${props.theme.lightGrey_C}`};
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.lightGrey_C};
  }
`;

export const TableBodyLIST = styled.li`
  width: ${(props) => props.width};
  height: ${(props) => props.height || `100%`};
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr || `row`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  line-height: ${(props) => props.lineHeight || `1.2`};
  font-weight: 300;
`;

export const MobileTableWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  padding: 10px;
  box-shadow: ${(props) => props.shadow};
  border: ${(props) => props.border};

  border-bottom: ${(props) =>
    props.borderBottom || `1px solid ${props.theme.lightGrey_C}`};
  background-color: ${(props) => props.bgColor || ``};
  transition: 0.5s;
  cursor: pointer;

  & ul {
    height: 40px;
    border-bottom: none;
  }
`;

export const MobileTable = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  display: none;
  border-top: ${(props) =>
    props.borderTop || `3px solid ${props.theme.black_C}`};

  @media (max-width: 700px) {
    display: block;
  }

  & a:nth-child(2n) div {
    background: ${(props) => props.theme.lightBasicTheme_c};
    color: ${(props) => props.theme.black_C};
  }
`;

export const MobileTableBody = styled.ul`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.ju || `center`};
  padding: ${(props) => props.padding};
  font-weight: ${(props) => props.fontWeight};

  & svg {
    color: ${(props) => props.theme.basicTheme_C};
    margin-bottom: 4px;
    margin-right: 4px;
  }
`;

export const PagenationWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  display: flex;
  flex-direction: ${(props) => props.dr || `row`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderBottom};
  border-radius: ${(props) => props.radius};
  box-shadow: ${(props) => props.shadow};
  font-size: ${(props) => props.fontSize || `14px`};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin || `20px 0px 0px`};
  padding: ${(props) => props.padding};
`;

export const Pagenation = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: ${(props) => props.dr || `row`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  cursor: pointer;
  padding-bottom: 3px;
  font-weight: 700px;
  color: ${(props) => props.theme.greyTheme4_C};

  &.active {
    color: rgb(248, 248, 248);
  }
`;

export const PagenationBtn = styled.div`
  text-align: center;
  font-size: 18px;
  width: 25px;
  height: 25px;
  color: ${(props) => props.theme.greyTheme4_C};

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 25px;
  margin: 0px 5px;

  &:hover {
    color: rgb(248, 248, 248);
  }
`;

export const EmptyList = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: ${(props) => props.dr || `row`};
  align-items: center;
  justify-content: center;
`;

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////Text////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

export const Text = styled.p`
  overflow: ${(props) => props.overflow};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.dr};
  align-items: ${(props) => props.al};
  justify-content: ${(props) => props.ju};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight || `500`};
  line-height: ${(props) => props.lineHeight || `1.6`};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background: ${(props) => props.bgColor};
  text-align: ${(props) => props.textAlign};
  transition: 0.5s;
  position: ${(props) => (props.isRelative ? `relative` : ``)};
  position: ${(props) => (props.isAbsolute ? `absolute` : ``)};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  font-style: ${(props) => props.fontStyle};
  cursor: ${(props) => props.cursor};
  z-index: 1;
  white-space: ${(props) => props.whiteSpace || `pre-wrap`};
  border-bottom: ${(props) => props.borderBottom};
  opacity: ${(props) => props.opacity};
  letter-spacing: ${(props) => props.letterSpacing};

  ${(props) =>
    props.isEllipsis
      ? `
    // display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
      : ``}

  font-family: ${(props) =>
    props.isGotham
      ? `'Gotham Black', sans-serif`
      : `'Noto Sans CJK KR', 'Noto Sans KR', sans-serif`};

  & svg {
    color: ${(props) => props.color};
    margin-top: ${(props) => props.marginTop};
    margin-bottom: ${(props) => props.marginBottom};
    margin-right: ${(props) => props.marginRight};
    font-size: ${(props) => props.fontSize || `18px`};
  }
`;

export const ColorText = styled.span`
  width: ${(props) => props.width || `100%`};
  font-size: ${(props) => props.fontSize || `20px`};
  font-weight: ${(props) => props.fontWeight || `600`};
  line-height: ${(props) => props.lineHeight || `1.6`};
  color: ${(props) => props.color || `${props.theme.basicTheme_C}`};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background: ${(props) => props.bgColor};
  text-align: ${(props) => props.textAlign || `center`};
  -webkit-text-fill-color: ${(props) => props.textFill};
  -webkit-background-clip: ${(props) => props.bgClip};
`;

export const ClampText = styled.p`
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight || `500`};
  line-height: ${(props) => props.lineHeight || `1.6`};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background: ${(props) => props.bgColor};
  text-align: ${(props) => props.textAlign};
  transition: 0.5s;
  position: ${(props) => (props.isRelative ? `relative` : ``)};
  font-style: ${(props) => props.fontStyle};
  cursor: ${(props) => props.cursor};

  z-index: 1;

  overflow: hidden;
  white-space: normal;
  line-height: 1.6;
  height: ${(props) => props.clamp * 1.6}em;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.clamp};
  -webkit-box-orient: vertical;

  & svg {
    color: ${(props) => props.color};
    margin-top: ${(props) => props.marginTop};
    margin-bottom: ${(props) => props.marginBottom};
    margin-right: ${(props) => props.marginRight};
    font-size: ${(props) => props.fontSize || `18px`};
    @media (max-width: 900px) {
      font-size: 18px;
    }
    @media (max-width: 800px) {
      font-size: 16px;
    }
    @media (max-width: 500px) {
      font-size: 14px;
    }
  }

  & span {
    word-break: break-all;
  }

  &:hover {
    background: ${(props) =>
      props.isBgColorHover ? `${props.theme.basicTheme_C}` : ``};
    font-weight: ${(props) => (props.isHover ? `800` : ``)};
  }
`;

export const SpanText = styled.span`
  display: ${(props) => props.display || `inline`};
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  display: ${(props) => props.display};
  background: ${(props) => props.bgColor};
  text-align: ${(props) => props.textAlign};
  text-decoration: ${(props) => props.decoration};
  transition: 0.5s;
  position: ${(props) => (props.isRelative ? `relative` : ``)};
  font-style: ${(props) => props.fontStyle};
  cursor: ${(props) => props.cursor};
  z-index: 1;
  border: ${(props) => props.border};
  font-family: ${(props) =>
    props.isGotham
      ? `'Gotham Black', sans-serif`
      : `'Noto Sans CJK KR', 'Noto Sans KR', sans-serif`};
`;

export const DotTitle = styled.span`
  width: auto;
  display: ${(props) => props.display || `contents`};
  color: ${(props) => props.theme.black_C};
  text-emphasis-style: dot;
  text-emphasis-position: over left;
  -webkit-text-emphasis-style: dot;
  -webkit-text-emphasis-position: over;
`;

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////Image//////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

export const Image = styled.img`
  display: ${(props) => props.display};
  width: ${(props) => props.width || `100%`};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height || `auto`};
  cursor: ${(props) => props.cursor};
  margin: ${(props) => props.margin};
  opacity: ${(props) => props.opacity};
  transform: ${(props) => props.transform};
  object-fit: ${(props) => props.objectFit || `cover`};
  position: ${(props) => (props.isAbsolute ? `absolute` : ``)};
  position: ${(props) => (props.isRelative ? `relative` : ``)};
  position: ${(props) => (props.isFixed ? `fixed` : ``)};
  box-shadow: ${(props) => props.shadow};
  border-radius: ${(props) => props.radius};
  z-index: ${(props) => props.zIndex};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  transition: ${(props) => props.delay || `0.3s`};
  filter: ${(props) => (props.isFilter ? `brightness(80%) opacity(0.8)` : ` `)};
  filter: ${(props) => props.filter};
  mix-blend-mode: ${(props) => (props.isBlendMode ? `luminosity` : ``)};

  transform: ${(props) => props.transform};

  &:hover {
    filter: ${(props) => (props.isHover ? `brightness(100%) opacity(1)` : ` `)};

    box-shadow: ${(props) =>
      props.isShadowHover ? `15px 20px ${props.theme.lightBasicTheme_c};` : ``};
    box-shadow: ${(props) =>
      props.isShadowHover2
        ? `15px -20px ${props.theme.lightBasicTheme_c};`
        : ``};
    box-shadow: ${(props) =>
      props.isShadowHover3
        ? `-15px 20px ${props.theme.lightBasicTheme_c};`
        : ``};
    box-shadow: ${(props) =>
      props.isShadowHover4
        ? `-15px -20px ${props.theme.lightBasicTheme_c};`
        : ``};
  }
`;

export const Image2 = styled.img`
  display: ${(props) => props.display};
  width: ${(props) => props.width || `100%`};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height || `auto`};
  margin: ${(props) => props.margin};
  cursor: ${(props) => props.cursor};
  transform: ${(props) => props.transform};
  object-fit: ${(props) => props.objectFit || `cover`};
  position: ${(props) => (props.isAbsolute ? `absolute` : ``)};
  position: ${(props) => (props.isRelative ? `relative` : ``)};
  box-shadow: ${(props) => props.shadow};
  border-radius: ${(props) => props.radius};
  z-index: ${(props) => props.zIndex};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  transition: ${(props) => props.delay || `0.3s`};
  filter: ${(props) =>
    props.isFilter ? `brightness(600) opacity(0.5)` : `brightness(600)`};
`;

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

export const TabWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin: ${(props) => props.margin};
`;

export const TabBtn = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 40px;
  margin: 10px 5px;
  border: ${(props) => props.border};
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadowV3};

    ${(props) =>
      props.kindOf === `activeBtn` && `background :${props.theme.white_C};`}
    ${(props) =>
      props.kindOf === `activeBtn` &&
      `border: 1px solid ${props.theme.basicTheme_C};`}
    ${(props) =>
      props.kindOf === `activeBtn` && `color ${props.theme.black_C};`}
      ${(props) =>
      props.kindOf === `white` && `background ${props.theme.basicTheme_C};`}
    ${(props) => props.kindOf === `white` && `color ${props.theme.white_C};`}
  }

  @media (max-width: 700px) {
    margin: 5px;
    width: 110px;
  }
`;

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////a//////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

export const ATag = styled.a`
  width: ${(props) => props.width || `100%`};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  flex-wrap: ${(props) => props.wrap || `wrap`};
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
`;
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////product//////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

export const ProductWrapper = styled(Wrapper)`
  width: calc(100% / 4 - (80px / 4));
  margin: 30px 26px 30px 0;
  position: relative;
  cursor: pointer;

  &:nth-child(4n) {
    margin-right: 0;
  }

  @media (max-width: 1100px) {
    width: calc(100% / 3 - (80px / 3));
    margin: 30px 40px 30px 0;

    &:nth-child(4n) {
      margin-right: 40px;
    }

    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media (max-width: 800px) {
    width: calc(100% / 2 - (20px / 2));
    margin: 20px 20px 20px 0;

    &:nth-child(3n) {
      margin-right: auto;
    }

    &:nth-child(2n) {
      margin-right: 0;
    }
  }
`;

////////////////////////////////////////////////file//////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
export const FileInput = styled.input`
  display: none;
`;

export const FileLabel = styled.label`
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height || `30px`};
  transition: ${(props) => props.transition || props.theme.transition};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  display: flex;
  flex-direction: ${(props) => props.dr || `row`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  color: ${(props) => props.theme.white_C};
  background: ${(props) => props.theme.basicTheme_C};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.white_C};
    color: ${(props) => props.theme.black_C};
    border: 1px solid ${(props) => props.theme.basicTheme_C};
  }
`;

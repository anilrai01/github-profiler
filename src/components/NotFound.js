import InitialScreenWrapper from "./InitialScreenWrapper";

export default function NotFound(props) {
  return (
    <InitialScreenWrapper>
      <p>
        {props.message
          ? props.message
          : "Sorry the requested page is not available right now !"}
      </p>
    </InitialScreenWrapper>
  );
}

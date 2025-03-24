import { industries } from "../../data/industries";
import { getUserOnBoardingStatus } from "../../../actions/user";
import { redirect } from "next/navigation";
import OnBoardingForm from "./_components/onboarding-form";

const OnBoardingPage = async () => {
    //check if user is already onboarded
    const { isOnboarded } = await getUserOnBoardingStatus();

    if (isOnboarded) {
        redirect("/dashboard");
    }


    return (
        <main>
            <OnBoardingForm industries={industries} />
        </main>
    );
}

export default OnBoardingPage;
"use client"
import * as React from "react";

interface EventInfoProps {
  date: string;
  time: string;
  location: string;
  food: string;
}

const EventInfo: React.FC<EventInfoProps> = ({ date, time, location, food }) => (
  <div className="flex flex-col mt-3">
    <button className="flex gap-2">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b181408e08bfdaa5c92df1ea3606b9e5e77a5ad63562b3d21b2ea57013f12507?apiKey=146a6091d2d94b4e93811b05a812fc9b&"
        alt=""
        className="shrink-0 my-auto w-4 aspect-square"
      />
      <div>{date}</div>
    </button>
    <button className="flex gap-2 mt-2">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/abd672b9d8b5f91c70b656aae5fd272aee1468f0a860fae4d2decdb798244921?apiKey=146a6091d2d94b4e93811b05a812fc9b&"
        alt=""
        className="shrink-0 my-auto w-4 aspect-square"
      />
      <div>{time}</div>
    </button>
    <button className="flex gap-2 mt-2">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/21cf39a651eea72f625d542f812d307fa0f6004804da86a68bd0cc6b401d749a?apiKey=146a6091d2d94b4e93811b05a812fc9b&"
        alt=""
        className="shrink-0 my-auto w-4 aspect-square"
      />
      <div>{location}</div>
    </button>
    <button className="flex gap-2 mt-2 whitespace-nowrap">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4e5c951702a5de3eaf791bc0c3c46a9f145f3458613d93b8fd3f90e81777dd8?apiKey=146a6091d2d94b4e93811b05a812fc9b&"
        alt=""
        className="shrink-0 my-auto w-4 aspect-square"
      />
      <div>{food}</div>
    </button>
  </div>
);

interface FoodOptionProps {
  label: string;
  icon: string;
  onClick: () => void;
}

const FoodOption: React.FC<FoodOptionProps> = ({ label, icon, onClick }) => (
  <button className="flex gap-2 mt-1" onClick={onClick}>
    <img
      loading="lazy"
      src={icon}
      alt=""
      className="shrink-0 my-auto w-4 aspect-square"
    />
    <div>{label}</div>
  </button>
);

function MyComponent() {
  const [email, setEmail] = React.useState("");
  const [foodOption, setFoodOption] = React.useState<string | null>(null);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleFoodOptionClick = (option: string) => {
    setFoodOption(option);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with email:", email);
    console.log("Selected food option:", foodOption);
  };

  return (
    <div className="flex flex-col pt-8 pb-4 mx-auto w-full bg-white max-w-[480px]">
      <button className="flex flex-col justify-center items-start px-4 w-full text-sm leading-5 text-zinc-900">
        <div className="flex gap-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/57825ec147e3d1082733903840d523cf44e0870412206d7e1fdaac44e86e9d83?apiKey=146a6091d2d94b4e93811b05a812fc9b&"
            alt=""
            className="shrink-0 my-auto w-4 aspect-square"
          />
          <div>Tilbake til oversikten</div>
        </div>
      </button>
      <div className="flex flex-col justify-center px-4 mt-6 w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/795f2c4a1c4097bda91d7e615bcf70fd6a5112cf3900a96219c6dce21bc2369a?apiKey=146a6091d2d94b4e93811b05a812fc9b&"
          alt="Miniatyrmaling event"
          className="w-full aspect-[2.7]"
        />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col px-4 mt-6 w-full text-sm leading-5 text-zinc-900">
          <h1 className="text-lg font-semibold">Miniatyrmaling</h1>
          <EventInfo
            date="Tirsdag 23. april 2024"
            time="Kl 17:00 - 20:00"
            location="Nedre Vollgate 11, rom 404"
            food="Pizza"
          />
          <div className="mt-3 leading-5">
            Velkommen til minatyrmalekveld. Her kan alle samles og male fine
            små miniatyrer sammen.
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end px-4 mt-6 w-full leading-[150%] text-zinc-900">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-xs font-medium">
            Navn
          </label>
          <div
            id="name"
            className="justify-center items-start px-4 py-2 mt-2 text-sm rounded-lg border border-solid border-zinc-900"
          >
            Arild Gram
          </div>
        </div>
        <form
          className="flex flex-col mt-6 text-xs font-medium"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email">E-post</label>
          <input
            type="email"
            id="email"
            className="justify-center items-start px-4 py-2 mt-2 text-sm whitespace-nowrap rounded-lg border border-solid border-zinc-900"
            placeholder="Enter your email"
            aria-label="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <div className="mt-2 text-red-600">Fyll ut dette feltet</div>
        </form>
        <div className="flex flex-col mt-6 text-sm text-black">
          <div className="text-xs font-medium text-zinc-900">Mat</div>
          <FoodOption
            label="Ja, jeg ønsker mat"
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/59b232c05469155d02b064809096c4401cd7c005d43d656d3f7ceabb9a5c4ce1?apiKey=146a6091d2d94b4e93811b05a812fc9b&"
            onClick={() => handleFoodOptionClick("yes")}
          />
          <FoodOption
            label="Nei, jeg trenger ikke mat"
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/323de79963034a29229e15cc148ddebd3026264bfd318d7e570dab46f5a118a8?apiKey=146a6091d2d94b4e93811b05a812fc9b&"
            onClick={() => handleFoodOptionClick("no")}
          />
        </div>
        <button
          type="submit"
          form="email-form"
          className="justify-center items-center px-4 py-2 mt-6 text-sm border border-solid border-zinc-900 rounded-[29px]"
        >
          Meld på
        </button>
        <button className="box-border relative shrink-0 px-6 py-4 mt-5 text-center bg-transparent rounded appearance-none cursor-pointer text-[black]">
          Avbryt
        </button>
      </div>
    </div>
  );
}

export default MyComponent;
import Profile from "./profile";
import Resources from "./resources";
import Companies from "./companies";
import StringNonRepeating from "./stringNonRepeating";
import StringLength from "./stringLength";
import StringVowels from "./stringVowels";
import ArraySearch from "./arraySearch";
import ArrayReverse from "./arrayReverse";
import ArraySum from "./arraySum";
import ArraySmallest from "./arraySmallest";
import Mock from "./mock";
import SearchingSortingPractice from "./searchingSortingPractice";
import SearchingSorting from "./searchingSorting";
import StackPractice from "./stackPractice";
import QueuePractice from "./queuePractice";
import StackQueue from "./stackQueue";
import LinkedListReverse from "./linkedListReverse";
import LinkedListSearch from "./linkedListSearch";
import LinkedListLength from "./linkedListLength";
import LinkedListTraverse from "./linkedListTraverse";
import LinkedListQuestion from "./linkedListQuestion";
import LinkedList from "./linkedList";
import StringPalindrome from "./stringPalindrome";
import StringQuestion from "./stringQuestion";
import Strings from "./strings";
import ArrayQuestion from "./arrayQuestion";
import Arrays from "./arrays";
import ResumeBuilder from "./resumeBuilder";
import MockInterview from "./mockInterview";
import Aptitude from "./aptitude";
import DSA from "./dsa";
import Dashboard from "./dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Signup from "./signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/companies" element={<Companies />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dsa" element={<DSA />} />
      <Route path="/strings" element={<Strings />} />
      <Route path="/aptitude" element={<Aptitude />} />
      <Route path="/mock-interview" element={<MockInterview />} />
      <Route path="/resume-builder" element={<ResumeBuilder />} />
      <Route path="/arrays" element={<Arrays />} />
      <Route path="/array-question" element={<ArrayQuestion />} />
      <Route path="/array-smallest" element={<ArraySmallest />} />
      <Route
  path="/string-question"
  element={<StringQuestion />}
/>
<Route
  path="/string-palindrome"
  element={<StringPalindrome />}
/>
<Route path="/linked-list" element={<LinkedList />} />
<Route
  path="/linked-list-question"
  element={<LinkedListQuestion />}
/>
<Route
  path="/linked-list-traverse"
  element={<LinkedListTraverse />}
/>
<Route
  path="/linked-list-length"
  element={<LinkedListLength />}
/>
<Route
  path="/linked-list-search"
  element={<LinkedListSearch />}
/>
<Route
  path="/linked-list-reverse"
  element={<LinkedListReverse />}
/>
<Route path="/stack-queue" element={<StackQueue />} />
<Route path="/stack-practice" element={<StackPractice />} />
<Route path="/queue-practice" element={<QueuePractice />} />
<Route path="/searching-sorting" element={<SearchingSorting />} />
<Route path="/mock" element={<Mock />} />
<Route path="/resume" element={<ResumeBuilder />} />
<Route
  path="/searching-sorting-practice"
  element={<SearchingSortingPractice />}
/>
<Route path="/array-sum" element={<ArraySum />} />
<Route path="/array-reverse" element={<ArrayReverse />} />
<Route path="/array-search" element={<ArraySearch />} />
<Route path="/string-vowels" element={<StringVowels />} />
<Route path="/string-length" element={<StringLength />} />
<Route
  path="/string-non-repeating"
  element={<StringNonRepeating />}
/>
</Routes>
    </BrowserRouter>
  );
}

export default App;
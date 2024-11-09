import { Check } from "lucide-react";
import { useState } from "react";
import { IoFunnel } from "react-icons/io5";

export function Filter() {
  const [questionArr, setQuestionsArr] = useState(questions);

  return (
    <div className=" ">
      <button className="bg-white rounded-3xl flex px-4 py-1 items-center font-semibold text-black mb-5 ">
        <IoFunnel className="mr-2 " size={12} />
        Filter
      </button>

      {questionArr &&
        questionArr.map((question, index) => (
          <div
            key={index}
            className={` ${
              index % 2 === 0 ? "bg-[#272626]" : ""
            } w-full rounded-lg flex items-center justify-between p-3 cursor-pointer hover:bg-lightGray`}
          >
            <div className="flex items-center">
              <div className="w-8">
                {question.completed && (
                  <Check className="text-green-500" size={20} />
                )}
              </div>

              {question.question}
            </div>

            {question.difficulty === "easy" && <span className="text-green-500">Easy</span>}
            {question.difficulty === "medium" && <span className="text-orange-300">Med.</span>}
            {question.difficulty === "hard" && <span className="text-red-500">Hard</span>}
          </div>
        ))}
    </div>
  );
}

const questions = [
  {
    completed: true,
    question: "1985. Find the Kth Largest Integer in the Array",
    difficulty: "medium",
    link: "https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/description/?envType=problem-list-v2&envId=pb8cmxb2",
  },

  {
    completed: false,
    question: "2. Add Two Numbers",
    difficulty: "easy",
    link: "https://leetcode.com/problems/add-two-numbers/description/?envType=problem-list-v2&envId=pb8cmxb2",
  },

  {
    completed: false,
    question: "4. Median of Two Sorted Arrays",
    difficulty: "hard",
    link: "https://leetcode.com/problems/median-of-two-sorted-arrays/description/",
  },

  {
    completed: true,
    question: "105. Construct Binary Tree from Preorder and Inorder Traversal",
    difficulty: "medium",
    link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
  },

  {
    completed: false,
    question: "160. Intersection of Two Linked Lists",
    difficulty: "easy",
    link: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
  },
];

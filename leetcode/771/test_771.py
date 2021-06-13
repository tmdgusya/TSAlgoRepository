import unittest


class TestingJewlesInStones(unittest.TestCase):

    def numJewelsInStones(self, jewels, stones):
        answer = 0
        for chac in jewels:
            answer += stones.count(chac)
        return answer

    def test_numJewelsInStones_case_one(self):
        self.assertEqual(
            self.numJewelsInStones("aA", "aAAbbbb"),
            3
        )

    def test_numJewelsInStones_case_two(self):
        self.assertEqual(
            self.numJewelsInStones("ebd", "bbb"),
            3
        )


if __name__ == '__main__':
    unittest.main()

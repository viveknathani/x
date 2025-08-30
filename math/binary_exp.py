def binary_exponentiation_modulo(base: int, exponent: int, modulo: int) -> int:
    result = 1
    base %= modulo
    while exponent > 0:
        if exponent % 2 == 1:
            result = (result * base) % modulo
        exponent = exponent >> 1
        base = (base * base) % modulo
    return result

print(binary_exponentiation_modulo(5, 110, 131)) # 60
